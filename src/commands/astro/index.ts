import { Command, Flags } from "@oclif/core";
import * as cp from "child_process";
import * as pc from "picocolors";
import { resolve } from "path";
import * as fs from "fs/promises";
import { turboConfig, turboPackage } from "../../turbo";
import { promisify } from "util";

const exec = promisify(cp.exec);

export default class Astro extends Command {
  static description = "Create Firemyna project using the Vite preset";

  static examples = ["npx create-firemyna vite"];

  static args = [
    {
      name: "projectName",
      description:
        "Name of the project (used to create directory, init package.json, etc.",
      required: true,
    },
  ];

  static flags = {
    turborepo: Flags.boolean(),
  };

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Astro);

    const [nameResult, emailResult] = await Promise.all([
      exec("git config --get user.name"),
      exec("git config --get user.email"),
    ]);
    const authorName = nameResult.stdout.trim() || undefined;
    const authorEmail = emailResult.stdout.trim() || undefined;

    if (flags.turborepo) {
      console.log("🔥🐣 Initializing Turborepo:");

      await fs.mkdir(args.projectName);
      process.chdir(args.projectName);

      fs.writeFile(
        "package.json",
        turboPackage({ projectName: args.projectName, authorName, authorEmail })
      );

      await Promise.all([
        cmd("npm", ["install", "--save-dev", "turbo"]),
        fs.mkdir("apps"),
        fs.writeFile("turbo.json", turboConfig({ preset: "astro" })),
        cmd("echo", [".turbo", ">", ".gitignore"]),
      ]);

      process.chdir("apps");
    }

    console.log("🔥🐣 Initializing Astro:");

    await cmd("npm", [
      "create",
      "astro@latest",
      flags.turborepo ? "astro" : args.projectName,
      "--no-install",
      "--no-git",
    ]);
    if (!flags.turborepo) process.chdir(args.projectName);

    // console.log("🔥🐣 Installing the dependencies:");

    // await cmd("npm", [
    //   "install",
    //   "--save",
    //   "firebase-functions@latest",
    //   "firebase-admin@latest",
    // ]);
    // await cmd("npm", [
    //   "install",
    //   "--save-dev",
    //   "firebase-tools@latest",
    //   "firemyna@latest",
    // ]);

    console.log("🔥🐣 Initializing Firebase:");

    // NOTE: It would be great to pass the defaults to avoid so many questions,
    // this issue might help when closed: https://github.com/firebase/firebase-tools/issues/2333
    // await cmd("npx", ["firebase", "init"]);

    // console.log("🔥🐣 Initializing git:");

    // await cmd("git", ["init"]);

    // console.log("🔥🐣 Initializing Firemyna:");

    // await Promise.all([
    //   cmd("npx", ["firemyna", "init", "--preset", "astro"]),
    //   cmd("git", ["apply", resolve(__dirname, "astro.config.patch")]),
    // ]);

    // console.log("🔥🐣 Initializing Snowpack:");

    // await cmd("npx", ["snowpack", "init"]);

    // console.log("🔥🐣 Tinkering with package.json:");

    // await cmd("git", ["apply", resolve(__dirname, "package.patch")]);
  }
}

const spawnOpts: cp.SpawnOptions = { stdio: "inherit", shell: true };

function cmd(command: string, args?: readonly string[] | undefined) {
  const proc = args
    ? cp.spawn(command, args, spawnOpts)
    : cp.spawn(command, spawnOpts);

  return new Promise((resolve) => proc.on("close", resolve));
}

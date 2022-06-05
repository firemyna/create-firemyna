export type TurboPreset = "astro" | "remix";

export interface TurboConfigProps {
  preset: TurboPreset;
  branch?: string;
}

export function turboConfig({ preset, branch }: TurboConfigProps) {
  return JSON.stringify(
    {
      $schema: "https://turborepo.org/schema.json",
      baseBranch: `origin/${branch || "main"}`,
      pipeline: presetPipeline(preset),
    },
    null,
    2
  );
}

export interface TurboPackageProps {
  projectName: string;
  authorName?: string;
  authorEmail?: string;
}

export function turboPackage({
  projectName,
  authorName,
  authorEmail,
}: TurboPackageProps) {
  return JSON.stringify(
    {
      name: projectName,
      version: "1.0.0",
      description: "",
      scripts: {
        test: 'echo "Error: no test specified" && exit 1',
      },
      author: `${authorName}${
        authorEmail ? (authorName ? ` <${authorEmail}>` : authorEmail) : ""
      }`,
      license: "UNLICENSED",
      private: true,
    },
    null,
    2
  );
}

function presetPipeline(preset: TurboPreset) {
  switch (preset) {
    case "astro":
    case "remix":
      return {
        functions: {
          dependsOn: ["^build"],
          outputs: [],
        },
        lint: {
          outputs: [],
        },
        dev: {
          cache: false,
        },
      };
  }
}

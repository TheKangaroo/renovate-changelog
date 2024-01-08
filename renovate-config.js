module.exports = {
    platform: "github",
    token: process.env.RENOVATE_TOKEN,
    extends: [
      ":semanticPrefixFixDepsChoreOthers",
      ":ignoreModulesAndTests",
      ":autodetectRangeStrategy",
      "group:monorepos",
      "group:recommended",
      "workarounds:all",
    ],
    enabledManagers: ["regex"],
    repositories: ["TheKangaroo/renovate-changelog"],
    regexManagers: [
        {
          fileMatch: ["(^|\\/|\\.)(hcl|yaml)$"],
          matchStrings: [
            '# renovate: datasource=(?<datasource>.*?) depName=(?<depName>.*?) versioning=(?<versioning>.*?)\\s.*?_version:.*"(?<currentValue>.*)"\\s',
          ],
        },
      ],

  };

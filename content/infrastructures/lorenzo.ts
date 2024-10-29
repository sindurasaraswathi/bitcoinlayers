import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const lorenzo: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "lorenzo",
    title: "Lorenzo",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Announced,
    staking: true,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://lorenzo-protocol.xyz",
        },
        {
            text: Site.Docs,
            url: "https://docs.lorenzo-protocol.xyz/",
        },
        {
            text: Site.Explorer,
            url: "https://github.com/Lorenzo-Protocol",
        },
        {
            text: Site.GitHub,
            url: "https://x.com/LorenzoProtocol",
        },
    ],
    description: "Under review.",
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content:
                        "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

export default lorenzo;

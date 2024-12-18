import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
} from "../props";

const arbitrum: LayerProject = {
    type: Type.Layer,
    slug: "arbitrum",
    title: "Arbitrum",
    entityType: EntityType.EthereumRollup,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.UnderReview,
        RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ETH",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://arbitrum.io/",
        },
        {
            text: Site.Docs,
            url: "https://docs.arbitrum.io/",
        },
        {
            text: Site.Explorer,
            url: "https://arbiscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/OffchainLabs/arbitrum",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/arbitrum",
        },
    ],
    description:
        "Arbitrum is an Ethereum rollup that that supports a variety of wrapped BTC tokens.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "Users trust the Threshold Network to keep tBTC backed and a 9 member federation to manage tBTC's bridge between Arbitrum and Ethereum",
                    content:
                        "tBTC's peg with bitcoin is managed by the Threshold Network, a distributed, but permissioned, two-way peg. tBTC is minted on Ethereum and then bridged to Arbitrum via its own custom bridge contract.\n\nThis bridge is managed by a 6/9 federation. Bitcoin users trust that 6 of the 9 members of this federation do not collude and steal user funds.",
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "wBTC is managed by a centralized consortium of companies. We are analyzing if wBTC is natively minted on Arbitrum or if is bridged from Ethereum.",
                    content:
                        "wBTC on Arbitrum is backed by a centralized consortium of three companies. These entities are responsible for custodying BTC that backs wBTC on its various networks. Users trust these entities to not collude and steal the funds backing wBTC.",
                },
                {
                    name: "cbBTC",
                    infrastructureSlug: "coinbase-cbbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "cbBTC is managed by a centralized custodian. We are analyzing if cbBTC is natively minted on Arbitrum or if is bridged from Ethereum.",
                    content: "cbBTC on Arbitrum is backed Coinbase. These entities are responsible for custodying BTC that backs cbBTC on its various networks. Users trust these entities to not collude and steal the funds backing cbBTC.\n\nIn addition to custodying funds backing cbBTC, Coinbase can censor users from using cbBTC and maintains unilateral control of cbBTC's smart contracts.",
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Solv SolvBTCBBN",
                    infrastructureSlug: "solv-solvbtcbbn",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "SolvBTCBBN is a derivative of Solv BTC. We are reviewing its trust assumptions.",
                },
                {
                    name: "Solv SolvBTC.ENA",
                    infrastructureSlug: "solv-solvbtcena",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "SolvBTC.ENA is a derivative of Solv BTC. We are reviewing its trust assumptions.",
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzeo-stbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "Lorenzo stBTC is a liquid staking token. We are reviewing its trust assumptions.",
                },
                {
                    name: "iBTC",
                    infrastructureSlug: "ibtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "iBTC is a two-way peg that leverages DLC contracts between various institutions and a federated attestor network. We are reviewing its trust assumptions.",
                },
                {
                    name: "Avalanche BTCb",
                    infrastructureSlug: "avalanche-btcb",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "Avalanche BTCb is a wrapped BTC asset on the Avalanche blockchain. We are reviewing its bridge between Arbitrum and Avalanche.",
                },
                {
                    name: "Babypie mBTC",
                    infrastructureSlug: "babypie-mbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content:
                "The data for Arbitrum's state is stored on the Ethereum blockchain. Anyone can run an Ethereum node and verify the state of Arbitrum.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Arbitrum blocks are produced and proposed by a centralized operator, but users can become their own block producer in the event of censorship or liveness failures",
            content:
                "Currently, Arbitrum's sequencer is managed by one entity. The Arbitrum sequencer can censor transactions and can also cause liveness failures if it goes down. Users can bypass the sequencer and send their transactions directly to the Ethereum L1. Users can also self-propose their own state transition, and exit Arbitrum.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Arbitrum state transitions finalize on Ethereum",
            content:
                "Arbitrum inherits finality guarantees from Ethereum. The Arbitrum sequencer provides a soft confirmation of transactions which are eventually summarized and sent to Ethereum.\n\n⚠️Arbitrum's sequencer can reorg prior to a transaction batch being accepted on Ethereum.",
        },
    ],
    sections: [
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content: "Aspects related to bitcoin security, relevant technologies, and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

export default arbitrum;
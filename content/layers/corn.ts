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

const corn: LayerProject = {
    type: Type.Layer,
    slug: "corn",
    title: "Corn",
    entityType: EntityType.TBD,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "BTCN",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://usecorn.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.usecorn.com/docs/developers/introduction",
        },
        {
            text: Site.Explorer,
            url: "https://cornscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/usecorn",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/use_corn",
        },
    ],
    description:
        "Corn is a permissioned rollup that leverages a wrapped BTC token as its gas token.",
        riskAnalysis: [
            {
                category: RiskCategory.BtcCustody,
                score: 0,
                tier: RiskFactor.NotApplicable,
                title: "",
                content: "",
                pegs: [
                    {
                        name: "Bitcorn BTCN",
                        infrastructureSlug: "bitcorn-btcn",
                        score: 0,
                        tier: RiskFactor.VeryHigh,
                        title: "Bitcoin users trust that tBTC will remain backed on Ethereum, and that the BOB bridge will not steal their funds",
                        content:
                            "BTCN is an Ethereum-based ERC-20 token. It is a BTC-derivative asset that is backed by cbBTC and wBTC. All of the BTCN supply is locked into Corn’s ERC-20 Bridge contract on Ethereum and is in escrow. On Corn, BTCN is primarily stored in the Bitcorn OFT contract.\n\nTo acquire BTCN on Corn, a user sends an approved BTC-derivative token to a swap contract on Ethereum and is then given BTCN on Corn from the Bitcorn OFT contract. The BTC-derivative is stored in a vault contract on Ethereum, essentially backing the BTCN outside of the Bitcorn OFT contract, that is on Corn.",
                    },
                ],
            },
            {
                category: RiskCategory.DataAvailability,
                score: 0,
                tier: RiskFactor.VeryHigh,
                title: "Data is stored and made available by a permissioned federation",
                content:
                    "The data needed to reconstruct the state and construct fraud proofs is made available by a permissioned committee. The committee is based on the AnyTrust data availability protocol. This sees a committee of signers produce a data availability certificate that the data needed for proof construction is available for a certain amount of time. In Corn, the data is made available by the DAC for two weeks.",
            },
            {
                category: RiskCategory.NetworkOperators,
                score: 0,
                tier: RiskFactor.VeryHigh,
                title: "The Corn network is operated and validated by permissioned entities",
                content:
                    "The Corn Network is operated by permissioned entities. Blocks are constructed by a single sequencer who is responsible for building Corn blocks and submitting the latest hash of these batches, and a corresponding Data Availability Certificate, to Ethereum.\n\nA centralized proposer is responsible for updating the system by proposing a new state root based on the data posted to Ethereum. This proposal requires 0.1 ETH stake.\n\nCurrently, producing blocks and state root proposals are done by two centralized entities. Their addresses are:\n\n[Sequencer address](https://etherscan.io/address/0x9298413c781c241af6f6733b7df00de5d4a42d93)\n\n[Proposer address](https://etherscan.io/address/0xe9d1e89a73d7608a45f3cdb5a898dfd9e3a3ba42)",
            },
            {
                category: RiskCategory.FinalityGuarantees,
                score: 0,
                tier: RiskFactor.VeryHigh,
                title: "BOB state transitions finalize on Ethereum",
                content:
                    "Corn blocks are finalized after its full nodes compute a new state root based on the data made available by the data availability committee. In its current architecture, only one entity is able to propose new state roots and advance the state.\n\n⚠️ Corn blocks can be reorged by the sequencer prior to the proposer computing and finalizing a new state root.",
            },
        ],
        sections: [
            {
                id: "bitcoinsecurity",
                title: "Bitcoin Security",
                content: [
                    {
                        title: "Corn does not inherit any security from Bitcoin",
                        content:
                            "In its current state, Corn does not inherit security from Bitcoin.",
                    },
                    {
                        title: "BTCN token used to pay fees",
                        content:
                            "Corn users pay sequencer fees in BTCN, a BTC-derivative asset. Corn operators pay fees in ETH.",
                    },
                    {
                        title: "No MEV introduced to Bitcoin",
                        content:
                            "Corn does not introduce any MEV on the Bitcoin L1. Users trust the Corn sequencer to not reorder their transactions to extract MEV.",
                    },
                    {
                        title: "Corn does not contribute to the security budget",
                        content:
                            "Corn does not currently contribute to the Bitcoin security budget.",
                    },
                ],
            },
            {
                id: "withdrawals",
                title: "Withdrawals",
                content: [
                    {
                        title: "Proposer role centralized and permissioned. BTC users must withdraw to Ethereum L1 before withdrawing to Bitcoin",
                        content:
                            "To withdraw from Corn, a user must send BTCN to the Wrapped Bitcorn OFT contract on Corn. This contract then communicates with a swap contract on Ethereum which releases a BTC-derivative asset from the vault contract back to the user.",
                    },
                ],
            },
            {
                id: "technology",
                title: "Technology",
                content: [
                    {
                        title: "Ethereum Virtual Machine",
                        content:
                            "Corn uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem. Corn is EVM-compatible, which means that a developer from Ethereum would have less difficulty deploying their applications on Corn compared to other execution environments.",
                    },
                    {
                        title: "Arbitrum Stylus",
                        content:
                            "In addition to being EVM-compatible, Corn leverages Stylus to support developers building WASM-based smart contracts. Developers can decide between building EVM-based applications or writing smart contracts in more common programming languages, such as Rust, and compiling these contracts to WASM.",
                    },
                    {
                        title: "Fault Proofs",
                        content:
                            "Corn sees its rollup state transitions and bridge finality finalized by validators submitting proposals for new state transitions. These proposals are submitted by a validator staking 0.1 ETH to the [where]. If a proposed state transition is invalid, another validator can submit a fault proof and challenge another validator’s proposed state transition.\n\nCorn currently only has one, whitelisted validator who is able to submit state transitions and fault proofs.",
                    },
                ],
            },
            {
                id: "usecases",
                title: "Use Cases",
                content: [
                    {
                        title: "Onchain applications",
                        content:
                            "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.",
                    },
                ],
            },
            {
                id: "sourcecode",
                title: "Source Code",
                content: [
                    {
                        title: "Some contracts related to Corn are source viewable",
                        content:
                            "We are reviewing if Corn has an open-source node implementation.",
                    },
                ],
            },
    ],
};

export default corn;

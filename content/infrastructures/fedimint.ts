import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
} from "../props";

const fedimint: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "fedimint",
    title: "Fedimint",
    entityType: EntityType.FederationSDK,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "BTC",
    purpose: Purpose.FederatedEcashMint,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://fedimint.org",
        },
        {
            text: Site.Docs,
            url: "https://fedimint.org/docs/intro",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/fedimint",
        // },
        {
            text: Site.GitHub,
            url: "https://github.com/fedimint",
        },
        {
            text: Site.GitHub,
            url: "https://x.com/fedimint",
        },
    ],
    description:
        "Fedimint is a module-based open source framework for building federated applications, which can be collaboratively managed by a group of trusted entities. The main application that is in production today is an open source federated Ecash mint. The construction of a Fedimint sees users lock their BTC into a federation's multi-sig, and receive a bearer Ecash IOU in return. The concept improves on the currently predominant form of third party custody, as the user has a socially known and trusted entity guarding their BTC; a concept that is termed “second party custody”.",
    sections: [
        {
            id: "riskbits",
            title: "Risk Bits",
            content: [
                {
                    title: "Users do not have custody of their BTC and trust guardians to process withdrawals",
                    content:
                        "Users deposit BTC into a multisig to interact with a Fedimint. Fedimints do not enable unilateral exits. Users explicitly trust the signers, known as guardians, of the federations’ multisig to not steal their funds. Stealing users’ funds needs a majority (e.g. 3/5 or 7/13) of guardians to collude. This is why “knowing your federation” is a key requirement when choosing second party custody.",
                },
                {
                    title: "The federation can cease to be operational",
                    content:
                        "Fedimint is designed to be Byzantine Fault Tolerant. It is resilient to m malicious nodes in a federation of 3m + 1 nodes. That means, if you run a federation of 4 guardians you are resilient to 1 failing/malicious one, if you run a federation of 7 guardians, 2 of those can cease to be operational without it affecting the mint operation. A recent case of DNS issues caused 1 out of 4 guardians in a federation to be permanently offline which puts the federation at high risk to become non-functional.",
                },
                {
                    title: "The federation can lose access to keys and therefore users’ funds",
                    content:
                        "As in any custodial setting, the federation can lose access to its keys which might result in the inability for the user to redeem their Ecash tokens for the deposited BTC. The likelihood of that scenario is quite low because it's a multisig setup, which is resilient to several keys becoming inaccessible.",
                },
                {
                    title: "Debasement Risk",
                    content:
                        "Ecash notes represent a claim on BTC held by the federation guardians. As such, there is the risk that a federation issues more claims on bitcoins than it actually holds, meaning that the liabilities (the issued Ecash tokens) exceed the actual assets (the bitcoin held in reserve). This discrepancy can lead to users being unable to redeem their (unbacked) tokens for bitcoin.",
                },
            ],
        },
        {
            id: "coretechnology",
            title: "Core Technology Components",
            content: [
                {
                    title: "Chaumian Ecash",
                    content:
                        "Chaumian Ecash enables a Fedimint to create and redeem IOU notes that represent claims on bitcoin. Ecash uses blinded signatures. This shields users’ balance towards the mint and ensures the privacy of transactions.",
                },
                {
                    title: "Federations",
                    content:
                        "Fedimint categorizes as a “federated Chaumian Mint”, jointly operated by multiple trusted entities(referred to as guardians) via a multisig setup.",
                },
                {
                    title: "Lightning Swaps",
                    content:
                        "Fedimints enable Lightning interoperability through LN gateways. A guardian or even any user of a federation can run a lightning node and pay and accept lightning invoices on behalf of users in the federation. This is particularly useful as Fedimint users don't need to be online to accept lightning payments.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Private Payments",
                    content:
                        "Fedimints enable anonymous payments through the use of blinded signatures. The mint is unaware of transactions made by the users or their respective account balance. The mint can only establish a link to a users’ onchain address when pegging in and out of the mint.",
                },
                {
                    title: "Second Party Custody",
                    content:
                        "It is being argued that self-custody, in its current form, is difficult for non-tech-savvy users. Fedimints would enable users to deposit their Bitcoin with a federation of trusted “second” parties” (e.g. family member or community leader). Federated community custody may be preferred by some users over the prevailing third party custodial model.",
                },
                {
                    title: "Cheap and fast transactions",
                    content:
                        "Fedimints provide low transaction fees for users, as a mint is a central entity and transactions do not require Bitcoin blockspace. Fund deposits can either be done via an onchain deposit or via the Lightning Network.",
                },
                {
                    title: "General Purpose Smart Contracts",
                    content:
                        "Fedimints can support any arbitrary computation. Federations supporting application modules like borrowing and lending protocols, and stablecoins, are possible.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open source",
                    content:
                        "All code related to the Fedimint project is free and open source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content:
                        "[Fedimint documentation site covering technological components and use cases.](https://fedimint.org)\n[Fedi offers a Fedimint wallet and shows how a Fedimint would work in practice.](https://www.fedi.xyz/product)\n[Fedimint's FAQs answer frequently asked questions.](https://fedimint.org/docs/category/frequently-asked-questions)",
                },
            ],
        },
    ],
};

export default fedimint;

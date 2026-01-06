import { AuthConfig } from "convex/server";
console.log(process.env.CLERK_JWT_ISSUER_DOMAIN!)

export default {
    providers: [
        {
            domain: "https://casual-sloth-36.clerk.accounts.dev",
            applicationID: "convex",
        },
    ],
} satisfies AuthConfig;
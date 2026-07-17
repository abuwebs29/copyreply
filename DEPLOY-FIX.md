# CopyReply Vercel build fix

Upload every file and folder in this package to the ROOT of the GitHub repository.

Required root items:
- app/
- components/
- lib/
- public/ (if present)
- package.json
- tsconfig.json
- next-env.d.ts
- vercel.json

Important:
- Do not upload only package.json.
- Do not place the project inside another copyreply-mvp folder.
- Delete package-lock.json and pnpm-lock.yaml.
- In Vercel, keep Root Directory set to the repository root.
- Turn off dashboard overrides for Install Command and Build Command.
- Set Node.js to 22.x.

The package contains lucide-react and the TypeScript @/* alias configuration required by the source imports.

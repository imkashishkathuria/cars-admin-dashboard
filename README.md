This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

All Requirements

✅ 1. Login page with mock authentication

✅ 2. Dashboard showing a paginated table of listings fetched from a mock api

✅ 3. Each row in the table has actions:  Approve |  Reject |  Edit
✅ 4. Clicking "Edit" opens a form with pre-filled listing data that can be updated
✅ 5. Use Next.js API routes to simulate listing approval/rejection (store in memory or use SQLite)
✅ 6. Use getServerSideProps for the dashboard page
✅ 7. Protect dashboard routes (auth logic)
✅ 8. Use React state management (Context API )
✅ 9. Add filtering by listing status (approved, pending, rejected)
✅ 10. /api/listings shows the json of paginated listings

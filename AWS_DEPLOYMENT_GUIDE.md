# AWS Amplify deployment guide

The site is ready in the public GitHub repository:

- Repository: <https://github.com/NexGenix-Websites/aman-yadav-portfolio>
- Branch: `main`
- Build output: repository root (`.`)
- Build dependencies: none

## 1. Sign in to your AWS account

Use an AWS account that belongs to you. If you do not have one yet, follow the [AWS Builder Center account guide](https://builder.aws.com/content/3K0hPixvikMqQ93vuL1Oyu5vym5/how-to-create-your-aws-account-and-first-project) and complete sign-up yourself. Keep your sign-in, payment details, and verification codes private.

Before deploying, check the plan and credits shown in AWS Settings and consider creating a monthly cost budget alert. Review the current AWS terms and pricing in your account; hosting cost depends on build time, storage, and traffic.

## 2. Connect GitHub to Amplify

1. In the AWS Console, open the `Portfolio` project (or create/select your own portfolio project).
2. Search for **AWS Amplify** and choose **Deploy an app**.
3. Select **GitHub** and continue. Sign in to GitHub if prompted.
4. Authorize the AWS Amplify GitHub App. When choosing repository access, select **Only select repositories** and grant it access to `aman-yadav-portfolio`.
5. Return to Amplify, select `NexGenix-Websites/aman-yadav-portfolio` and branch `main`, then continue.

Amplify's GitHub App uses read-only repository access. You can scope it to this one repository, as described in the [AWS Amplify GitHub access guide](https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html).

## 3. Deploy the static site

1. Keep the repository root as the build output. The root `amplify.yml` contains no-op build commands and publishes `index.html`, `styles.css`, `script.js`, and `favicon.svg`.
2. Review the app settings and choose **Save and deploy**.
3. Wait until branch `main` shows **Deployed**, then choose **Visit deployed URL**. The public URL should end in `amplifyapp.com` and load over HTTPS.
4. Open the URL on desktop and mobile. Check the section links, then open **Take a 20-second cloud break** and complete the Cloud Break puzzle.

The AWS Builder Center's [website deployment guide](https://builder.aws.com/content/3LOwx6ofpPdaX6dKye9ZLNdvXl7/how-to-put-your-website-online) walks through the same Amplify and GitHub flow. Once connected, pushes to `main` trigger a new deployment.

## 4. Finish the hackathon evidence

After the real deployment succeeds:

- Add the live Amplify URL to the website, `README.md`, and `HACKATHON_SUBMISSION.md`.
- Capture real screenshots of the live homepage on desktop and mobile, the puzzle result, and the Amplify app showing a successful deployment.
- Replace the starter learning/challenge notes in `HACKATHON_SUBMISSION.md` with what actually happened during your setup.
- Keep the Amplify app active and the URL accessible during judging.

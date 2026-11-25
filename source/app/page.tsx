import { IssuePage } from "./issue-page";
import { issue080 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue080);

export default function Home() {
  return <IssuePage issue={issue080} />;
}

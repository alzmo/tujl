import { IssuePage } from "./issue-page";
import { issue073 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue073);

export default function Home() {
  return <IssuePage issue={issue073} />;
}

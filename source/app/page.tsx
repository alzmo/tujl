import { IssuePage } from "./issue-page";
import { issue066 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue066);

export default function Home() {
  return <IssuePage issue={issue066} />;
}

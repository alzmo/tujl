import { IssuePage } from "./issue-page";
import { issue082 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue082);

export default function Home() {
  return <IssuePage issue={issue082} />;
}

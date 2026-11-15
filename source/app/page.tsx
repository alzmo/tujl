import { IssuePage } from "./issue-page";
import { issue070 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue070);

export default function Home() {
  return <IssuePage issue={issue070} />;
}

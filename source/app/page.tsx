import { IssuePage } from "./issue-page";
import { issue075 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue075);

export default function Home() {
  return <IssuePage issue={issue075} />;
}

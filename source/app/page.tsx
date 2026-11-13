import { IssuePage } from "./issue-page";
import { issue068 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue068);

export default function Home() {
  return <IssuePage issue={issue068} />;
}

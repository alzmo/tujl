import { IssuePage } from "./issue-page";
import { issue083 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue083);

export default function Home() {
  return <IssuePage issue={issue083} />;
}

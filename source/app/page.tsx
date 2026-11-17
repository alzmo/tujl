import { IssuePage } from "./issue-page";
import { issue072 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue072);

export default function Home() {
  return <IssuePage issue={issue072} />;
}

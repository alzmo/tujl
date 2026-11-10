import { IssuePage } from "./issue-page";
import { issue067 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue067);

export default function Home() {
  return <IssuePage issue={issue067} />;
}

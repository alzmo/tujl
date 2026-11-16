import { IssuePage } from "./issue-page";
import { issue071 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue071);

export default function Home() {
  return <IssuePage issue={issue071} />;
}

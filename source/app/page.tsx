import { IssuePage } from "./issue-page";
import { issue069 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue069);

export default function Home() {
  return <IssuePage issue={issue069} />;
}

import { IssuePage } from "../../issue-page";
import { issue004 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue004);

export default function Issue004() {
  return <IssuePage issue={issue004} />;
}

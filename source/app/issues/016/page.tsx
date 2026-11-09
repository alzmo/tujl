import { IssuePage } from "../../issue-page";
import { issue016 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue016);

export default function Issue016Page() {
  return <IssuePage issue={issue016} />;
}

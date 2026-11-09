import { IssuePage } from "../../issue-page";
import { issue008 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue008);

export default function Issue008Page() {
  return <IssuePage issue={issue008} />;
}

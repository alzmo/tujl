import { IssuePage } from "../../issue-page";
import { issue020 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue020);

export default function Issue020Page() {
  return <IssuePage issue={issue020} />;
}

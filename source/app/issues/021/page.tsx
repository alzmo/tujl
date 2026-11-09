import { IssuePage } from "../../issue-page";
import { issue021 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue021);
export default function Issue021Page() { return <IssuePage issue={issue021} />; }

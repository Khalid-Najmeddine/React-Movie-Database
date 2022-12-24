import type { NextPage } from "next";
import Link from "next/link";

const errorMessage: NextPage = () => {
  return (
    <div className="not-found">
      <h1>Oooops....</h1>
      <h2>That page cannot be found.</h2>
      {/* <p>Go back to the <Link href="/"><a>Homepage</a></Link></p> */}
    </div>
  );
}

export default errorMessage

/* <div>This route doesn't exist...</div> */
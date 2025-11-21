import Link from "next/link";

export default function ResumePage() {
  // Google Drive link - make sure sharing is set to "Anyone with the link can view"
  // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // For embedding: https://drive.google.com/file/d/FILE_ID/preview
  const resumeDriveId = "1CqiCLshKPlUGCQrNPq1xuXwSA5zaEIik";
  const resumeViewUrl = `https://drive.google.com/file/d/${resumeDriveId}/preview`;
  const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeDriveId}`;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-4 text-primary-text">Resume</h1>
        <p className="text-lg text-secondary-text mb-8">
          Download my resume or view it online.
        </p>

        {/* Download Button */}
        <div className="mb-12">
          <a
            href={resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-button-bg text-button-text rounded-lg hover:bg-button-hover transition-colors font-medium"
          >
            Download Resume (PDF)
          </a>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="border border-secondary-text/20 rounded-lg overflow-hidden">
          <iframe
            src={resumeViewUrl}
            className="w-full h-[800px]"
            title="Arjun Kantamsetty Resume"
            allow="autoplay"
          />
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Link
            href="/"
            className="text-accent hover:text-primary-text transition-colors font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}


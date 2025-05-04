import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Velusamy49.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
      <h1
  style={{
    fontSize: "2.1em",
    paddingBottom: "20px",
    textAlign: "center", 
    margin: "0 auto",   
  }}
>
  Download the Resume
</h1>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download pdf
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

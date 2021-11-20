import Button from "@restart/ui/esm/Button";
import { Container, Modal } from "react-bootstrap";
import "../recruiter/RecruiterDashboard.css";

function ApplicationModel(props) {
  const { show, onHide, data, message, loading } = { ...props };
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        scrollable={true}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Applicants for this job
            <div>
              <h6 className="row text-muted pl-3">
                Total {data ? data.length : 0} job applicants
              </h6>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid section2">
          <Container className="section2">
            {/* {console.log("data on application model="+data)} */}
            <div className="row">
              {data
                ? data.map((data) => {
                    return (
                      <div className="col-md-5 m-1 pl-1 bg-white ">
                        <div className="row justify-content-center">
                          <div className="col-3 font-weight-bold">A</div>
                          <div className="col-9">
                            <div className="row font-weight-bold ">
                              {data.name}
                            </div>
                            <div className="row">{data.email}</div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col font-weight-bold ">Skills</div>
                        </div>
                        <div className="row">
                          <div className="col">{data.skills}</div>
                        </div>
                      </div>
                    );
                  })
            :<h4 className="text-info">{message}</h4>}
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ApplicationModel;

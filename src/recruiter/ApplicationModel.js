import Button from "@restart/ui/esm/Button";
import { Container, Modal,  } from "react-bootstrap";
import "../recruiter/RecruiterDashboard.css";

function ApplicationModel(props) {
  const { show, onHide, data, message, loading } = { ...props };
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        scrollable={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
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
        <Modal.Body className="show-grid section2 ">
          <Container className="section2">
            <div className="row justify-content-between">
              {/* {console.log("data on application model="+data)} */}
              {/* <h5 className="text-info">{message}</h5> */}

              {data ? (
                data.map((data) => {
                  return (
                    <div className="col-md-5 ">
                      <div
                        className="card border-secondary mb-3"
                        style={{ maxWidth: "18rem" }}
                      >
                        <div className="card-header">
                          <div className="row">
                            <div className="col-2">
                              <h1 className="">{data.name.substring(0, 1)}</h1>
                            </div>
                            <div className="col-9 ml-3">
                              <div className="row">{data.name}</div>
                              <div className="row">{data.email}</div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body text-secondary">
                          <h5 className="card-title">Skills</h5>
                          <p className="card-text">{data.skills}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="container">
                  <div className="row mt-3 pt-5 justify-content-center">
                    <div className="">
                      <i class="fas fa-file-alt text-muted fa-4x "></i>
                    </div>
                  </div>
                  <div className="row">
                    <div className="m-auto pt-3 pb-5">
                      <h6 className="text-muted ">
                        No applications available!
                      </h6>
                    </div>
                  </div>
                </div>
              )}
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

import React from "react";

export default function Cart() {
  return (
    <>
      {auth ? (
        <div>
          <ToastContainer />
          <h1 className="text-center my-2 border border-success border-5 bg-secondary bg-gradient">
            Cart Page
          </h1>
          <Container>
            <Row className="justify-content-center text-center">
              <Col md={9}>
                
              </Col>
              <Col md={3}>
                
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <section>
          <h1>Redirecting to signIn page</h1>
        </section>
      )}
    </>
  );
}

import React, { useState, useEffect } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import { Container, Col, Row, Form } from 'react-bootstrap';
const DataTable = () => {
  let users = [
    {
      id: '123456789',
      createdDate: '2021-01-06T00:00:00.000Z',
      status: 'En validation',
      firstName: 'Mohamed',
      lastName: 'Taha',
      userName: 'mtaha',
      registrationNumber: '2584',
    },

    {
      id: '987654321',
      createdDate: '2021-07-25T00:00:00.000Z',
      status: 'Validé',
      firstName: 'Hamid',
      lastName: 'Orrich',
      userName: 'horrich',
      registrationNumber: '1594',
    },

    {
      id: '852963741',
      createdDate: '2021-09-15T00:00:00.000Z',
      status: 'Rejeté',
      firstName: 'Rachid',
      lastName: 'Mahidi',
      userName: 'rmahidi',
      registrationNumber: '3576',
    },
  ];
  const [_users, setUsers] = useState({ users: [] });
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    const getUsers = () => {
      //const { data } = users;
      //setUsers({ users: data });
      console.log(users[0]);
    };

    getUsers();
  }, [setUsers]);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Ajout d'utilisateurs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
          <Container>
            <Form>
              <Row>
                <Col xs={12} md={4}>
                  <Form.Group className='mb-3' controlId='formNom'>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type='text' />
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                  <Form.Group className='mb-3' controlId='formPrenom'>
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type='text' />
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                  <Form.Group className='mb-3' controlId='formEtat'>
                    <Form.Label>Etat</Form.Label>
                    <Form.Control type='text' />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={4}>
                  <Form.Group className='mb-3' controlId='formUsername'>
                    <Form.Label>Nom d'utilisateur</Form.Label>
                    <Form.Control type='text' />
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                  <Form.Group className='mb-3' controlId='formDate'>
                    <Form.Label>Date de création</Form.Label>
                    <Form.Control type='text' />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={4}>
                  <Form.Group className='mb-3' controlId='formMatricule'>
                    <Form.Label>Matricule</Form.Label>
                    <Form.Control type='text' />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant='warning'>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date de création</th>
            <th>Etat</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Nom d'utilisateur</th>
            <th>Matricule</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.createdDate}</td>
              <td>{item.status}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.userName}</td>
              <td>{item.registrationNumber}</td>
              <td>
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
          ))}
        </tbody>
      </ReactBootStrap.Table>
      <div>
        <Button variant='warning' onClick={() => setModalShow(true)}>
          Ajouter utilisateur
        </Button>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default DataTable;

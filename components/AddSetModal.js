import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modalbox'

const AddSetModal = (props) => {
  const afterOpenModal = (e) => {
    props.onAfterOpen(e, 'After Modal Open');
  }

  const onModalClose = (e) => {
    let data;
    props.onCloseModal(e, data)
  }

  return (
    <Modal
    style={styles.modal}
    position='center'
    isOpen={props.isModalOpened}
    onAfterOpen={e => afterOpenModal(e)}
    backdrop={true}
    onClosed={(e) => {
      onModalClose(e)
    }}
    >
      <Text>Add in your heaviest set</Text>
    </Modal>
  )
}

export default AddSetModal

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    borderRadius: 30,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 280,
  }
})
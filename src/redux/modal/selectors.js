export const selectIsModalOpen = (state) => state.modal.isOpen;
export const selectModal = (state) => state.modal;
export const selectModalType = (state) => state.modal.type;
export const selectModalProps = (state) => state.modal.props;
export const selectModalData = (state) => state.modal.data;

export const selectBookTrialOpen = (state) => state.bookTrial.isOpen;
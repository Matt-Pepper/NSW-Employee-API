import { useMutation, useQueryClient } from "react-query";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { deleteEmployeeFn } from "../../api/EmployeeApi";

const ConfirmModal = (props: any) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (id: number) => deleteEmployeeFn(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["employees"] });
            props.toggle();
        },
    });

    return (
        <div>
            <Modal {...props}>
                <ModalHeader>Remove?</ModalHeader>
                <ModalBody>
                    {`Are you sure you want to remove ${props.employee.firstName} from the database?`}
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="danger"
                        onClick={() => {
                            mutation.mutate(props.employee.id);
                        }}
                    >
                        Remove
                    </Button>{" "}
                    <Button color="primary" onClick={() => props.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ConfirmModal;

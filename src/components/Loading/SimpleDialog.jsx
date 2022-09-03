import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Circular from './Circular';

function SimpleDialog(props) {
    const { open } = props;
    return (
        <Dialog open={open}>
            <DialogTitle>
                <Circular />
            </DialogTitle>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo() {
    return (
        <SimpleDialog
            open={true}
        />
    );
}

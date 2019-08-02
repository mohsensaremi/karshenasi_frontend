import {withHandlers} from "recompose";
import uuid from 'uuid/v4';

export default withHandlers({
    onChangeItem: ({onChange, value}) => (id) => (data) => {
        const index = value.findIndex(item => item.name === id || item.id === id);
        onChange([
            ...value.slice(0, index),
            {
                ...value[index],
                ...data,
            },
            ...value.slice(index + 1),
        ]);
    },
    onChangeDelete: ({onChange, value, files, setFiles}) => (id) => (event) => {
        event.stopPropagation();
        const index = value.findIndex(item => item.name === id || item.id === id);
        const deletingItems = value[index];

        if (deletingItems.fresh) {
            const fileIndex = files.findIndex(f => f.id === deletingItems.id);
            if (fileIndex >= 0) {
                setFiles([
                    ...files.slice(0, index),
                    ...files.slice(index + 1),
                ])
            }

            onChange([
                ...value.slice(0, index),
                ...value.slice(index + 1),
            ]);
        } else {
            onChange([
                ...value.slice(0, index),
                {
                    ...deletingItems,
                    deleted: true,
                },
                ...value.slice(index + 1),
            ]);
        }
    },
    onDropAccepted: ({setFiles, value, onChange}) => (files) => {
        files.forEach(f => {
            f.id = uuid();
        });
        const newValue = files.map(file => {
            return {
                id: file.id,
                preview: URL.createObjectURL(file),
                fresh: true,
            };
        });
        setFiles((currentFiles) => [...currentFiles, ...files]);
        onChange([...value, ...newValue]);
    },
    getFileFromState: ({files}) => (id) => {
        return files.find(f => f.id === id) || null;
    },
})

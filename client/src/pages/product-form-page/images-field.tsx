import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  IconButton,
  InputAdornment,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import uniqid from 'uniqid';

const initImagesIds: string[] = [uniqid()];

type ImagesFieldProps = {
  defaultImages?: string[]
};

const ImagesField: React.FC<ImagesFieldProps> = ({
  defaultImages,
}) => {
  const imgMap = React.useMemo(() => (defaultImages !== undefined
    ? defaultImages.reduce<{ [key in string]: string }>((prevMap, defaultImg) => ({
      ...prevMap,
      [uniqid()]: defaultImg,
    }), {})
    : undefined), [defaultImages]);

  const [imagesIds, setImagesIds] = React.useState<string[]>(imgMap !== undefined
    ? Object.keys(imgMap)
    : initImagesIds);

  const addImageField = () => setImagesIds([...imagesIds, uniqid()]);
  const removeImageField = (id: string) => setImagesIds(imagesIds.filter((imgId) => imgId !== id));

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ pl: 1 }}>Images</Typography>
      <Stack sx={{ gap: 2 }}>
        {imagesIds.map((id) => (
          <TextField
            required
            key={id}
            name="images"
            label="Image"
            fullWidth
            variant="filled"
            defaultValue={imgMap && imgMap[id]}
            InputProps={imagesIds.length > 1 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeImageField(id)}>
                    <DeleteIcon color="error" sx={{ fontSize: 27 }} />
                  </IconButton>
                </InputAdornment>
              ),
            } : undefined}
          />
        ))}
      </Stack>
      <IconButton onClick={addImageField}>
        <AddCircleIcon color="success" sx={{ fontSize: 35 }} />
      </IconButton>
    </Box>
  );
};

export default ImagesField;

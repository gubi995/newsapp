import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';
import { useNewsMutation } from '../hooks/useNewsMutation';
import styles from '../styles/NewsForm.module.css';

const NewsForm = () => {
  const [mutate] = useNewsMutation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createNews = async () => {
    if (title && description) {
      const news = await mutate({ title, description });

      console.log('News created', { news });

      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className={styles.newsform}>
      <Input
        label="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        label="Description"
        type="textarea"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button label="Create" onClick={createNews} />
    </div>
  );
};

export default NewsForm;

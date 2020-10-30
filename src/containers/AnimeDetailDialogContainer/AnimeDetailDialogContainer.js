import React from 'react';
import AnimeDetailDialog from 'components/AnimeDetailDialog/AnimeDetailDialog';
import { useAnimeDetailDialog } from 'custom-hooks/animeHook';

const AnimeDetailDialogContainer = () => {
  const {
    isAnimeDetailDialogOpen,
    handleAnimeCloseDetailDialog,
    handleSaveAnimeStatus,
    title,
    imageUrl,
    animeId,
    status,
    finalStatus,
    icon,
  } = useAnimeDetailDialog();

  return (
    <AnimeDetailDialog
      open={isAnimeDetailDialogOpen}
      onClose={handleAnimeCloseDetailDialog}
      title={title}
      imageUrl={imageUrl}
      animeId={animeId}
      status={status}
      onSaveClick={handleSaveAnimeStatus}
      statusArray={finalStatus}
      icon={icon}
    />
  );
};

export default AnimeDetailDialogContainer;

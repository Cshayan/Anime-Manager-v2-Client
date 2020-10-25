import React from 'react';
import AnimeDetailDialog from 'components/AnimeDetailDialog/AnimeDetailDialog';
import { useAnimeDetailDialog } from 'custom-hooks/animeHook';

const AnimeDetailDialogContainer = () => {
  const {
    isAnimeDetailDialogOpen,
    handleAnimeCloseDetailDialog,
    animeDialogDetail,
    handleSaveAnimeStatus,
  } = useAnimeDetailDialog();

  const statusArray = [
    'Unwatched',
    'Watching',
    'Completed',
    'On Hold',
    'Dropped',
  ];

  const finalStatus = statusArray.filter(
    (status) => status !== animeDialogDetail.status,
  );

  return (
    <AnimeDetailDialog
      open={isAnimeDetailDialogOpen}
      onClose={handleAnimeCloseDetailDialog}
      title={animeDialogDetail.title}
      imageUrl={animeDialogDetail.imageUrl}
      animeId={animeDialogDetail.animeId}
      status={animeDialogDetail.status}
      onSaveClick={handleSaveAnimeStatus}
      statusArray={finalStatus}
    />
  );
};

export default AnimeDetailDialogContainer;

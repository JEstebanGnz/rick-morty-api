export const formatDate = (createdDate: string): string => {
    const date = new Date(createdDate);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export const getStatusColor = (characterStatus: string): string => {
    switch (characterStatus.toLowerCase()) {
        case 'alive':
          return 'bg-green-500';
        case 'dead':
          return 'bg-red-500';
        case 'unknown':
          return 'bg-gray-400';
        default:
          return 'bg-gray-400';
      }
}
interface teacher__interface {
  staff_code: string;
  user_id: string;
  teaching_level_id: string;
  position_code: string;
  qualification_id: string;
}
export const removeDuplicate = async (data: any = []) => {
  const uniqueIds = new Set();

  const uniqueResponse = data.filter((element: any) => {
    const isDuplicate = uniqueIds.has(element.user_id);

    uniqueIds.add(element.user_id);

    if (!isDuplicate) {
      return true;
    }
    return false;
  });
  return uniqueResponse as teacher__interface[];
};

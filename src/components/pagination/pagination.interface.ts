export interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    //   siblingCount: number;
    //   pageSize: number;
    paginate: Function;
    disabled: boolean;
}
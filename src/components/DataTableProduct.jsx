import DataTable from 'react-data-table-component';
import { useGetProductQuery } from '../redux/api';

const columns = [
    {
        name: 'Image',
        selector: row => (
            <img src={row.thumbnail} alt={row.title} width={45} height={45} />
        ),
    },

    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Description',
        selector: row => row.description,
    },

    {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
    },
    {
        name: 'Tags',
        selector: row => row.tags
    },
    {
        name: 'Action',
        cell: row => (
            <a href={`/product/${row.id}`} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                View
            </a>

        ),
    }
];



export default function DataTableProduct() {

    const { data } = useGetProductQuery();

    return (
        <DataTable
            columns={columns}
            data={data.products || []}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="400px"
        />
    );
};
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
        selector: row => row.price
    },
    {
        name: 'Tags',
        selector: row => row.tags
    }
];



export default function DataTableProduct() {

    const { data = [] } = useGetProductQuery({
        page: 1,
        limit: 10
    })
    
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const TablePDF = ({ data }) => {
    const styles = StyleSheet.create({
        page: {
            padding: 50,
        },
        table: {
            display: 'table',
            width: 'auto',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#bfbfbf',
            margin: '10px 0'
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableHeader: {
            flexDirection: 'row',
            backgroundColor: '#424242',
            color: '#ffffff', 
        },
        tableColHeader: {
            width: '33.33%',
            textAlign: 'center',
            padding: 5,
            fontWeight: 'bold',
        },
        tableCol: {
            width: '33.33%',
            textAlign: 'center',
            padding: 5,
        },
        tableCell: {
            margin: 5,
            fontSize: 10,
        },
        tableCellOdd: {
            backgroundColor: '#f0f0f0', 
        },
        tableCellEven: {
            backgroundColor: '#d0d0d0', 
        }
    })

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCell}>Value</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCell}>Percentage</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCell}>Date</Text>
                        </View>
                    </View>
                    {data.map((item, index) => (
                        <View style={styles.tableRow} key={index}>
                            <View style={[styles.tableCol, index % 2 === 0 ? styles.tableCellEven : styles.tableCellOdd]}>
                                <Text style={styles.tableCell}>{item.value.toFixed(4)}</Text>
                            </View>
                            <View style={[styles.tableCol, index % 2 === 0 ? styles.tableCellEven : styles.tableCellOdd]}>
                                <Text style={styles.tableCell}>{item.percentage.toFixed(4)}</Text>
                            </View>
                            <View style={[styles.tableCol, index % 2 === 0 ? styles.tableCellEven : styles.tableCellOdd]}>
                                <Text style={styles.tableCell}>{item.datetime.split("T")[0]}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    )
}

export default TablePDF

import { FlatList, Text, View, Image, StyleSheet } from "react-native"


export default function Lista({ repositories }) {

    return (
        <FlatList style={styles.list}


            data={repositories}
            keyExtractor={(item) => item.idMeal}
            ItemSeparatorComponent={<View style={styles.line}></View>}
            renderItem={({ item }) =>
                <View>
                    <Text style={styles.text}>
                        {item.strMeal}
                    </Text>

                    <Image
                        style={styles.image}
                        source={{
                            uri: `${item.strMealThumb}`
                        }}

                    />

                </View>}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        marginBottom: 5
    },
    line: {
        height: 1,
        backgroundColor: "lightgray",
        marginLeft: 20
    },
    list: {
        marginTop: 50,
        width: 250
    },
    text: {
        fontSize: 18,
    }
});
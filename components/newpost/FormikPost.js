import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Divider} from 'react-native-elements';
import validUrl from 'valid-url';

const uploadPostSchema = Yup.object().shape({
  imageURL: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'caption has reached the characters'),
});

const image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAMFBMVEX09PTMzMzx8fHPz8/u7u7JycnY2NjT09P39/fm5ubq6urR0dHf39/W1tbt7e3c3NzOM/f9AAAB7UlEQVR4nO3a626qQBSAUS4dLmrr+79t0XoBtC3MOSnbZK2fCsnnZBwYsSgAAAAAAAAAAAAAAAAAAAAAAAAAAH7zlmPr6OJQlzn2h22z31NWdlmmZsvsQ272EL7liOdNki/77bKrYbjTR8aJH6fw6r/3LHXqLruMEzvdOSbd3WDpiYG6+/eybJeuEXG62/OKmOpl39Iw3e1tIV9UE6W7v2WnZskkD9LdtaPr4JPjHj5KkO5ifP3ePR53nCe+RneT5o1Rukf3KekhZ8gu6+mrUbqPo9ul2WTumvN3dhoepbu6ryf97Jjm8tZ+nBmlu9hd6tJhOtxdc/tE4xEP0929tWVKZd3PZkkz3ljcQ8N0n8r7/uEiP8kejXig7ie6ZraNq6/7+NDdD9n38MjdT7JvUyVcd7W7bSOeZV/Dw3W36bqiPM++5AbrrtrThef8wrfZZV2E6z7fzp7Cv5kkX8J1X+7Ch/CfssN13zcP7XfJEbt/jo3aXS3OjtW9PDtU94rsSN1rsgN1V2uydet+se7il9Ko3dV+jTjd52cNiwXqXutlu9P23btq9b8Kqn7b8S72qxaSqXa77O5fns/Pf5L7U8fs/0McN6we9G2do53/3PzXuqLKseUcAQAAAAAAAAAAAAAAAAAAAAAAAABexCfv9xRvgCHcRgAAAABJRU5ErkJggg==';

const FormikPost = ({navigation}) => {
  const [thumbnailURL, setThumbnailURL] = useState(image);
  return (
    <Formik
      initialValues={{caption: '', imageURL: ''}}
      onSubmit={values => {
        console.log(values);
        console.log('Your post was uploaded successfully');
        navigation.goBack();
      }}
      validateOnMount={true}
      validationSchema={uploadPostSchema}>
      {({values, errors, isValid, handleChange, handleBlur, handleSubmit}) => (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image
              style={{width: 100, height: 100}}
              source={{
                uri: validUrl.isUri(thumbnailURL) ? thumbnailURL : image,
              }}
            />
            <View style={{flex: 1, marginLeft: 12}}>
              <TextInput
                style={{color: 'white', fontSize: 20}}
                placeholder="Write a caption"
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.1} orientation="vertical" />
          <TextInput
            onChange={e => setThumbnailURL(e.nativeEvent.text)}
            style={{color: 'white', fontSize: 18}}
            placeholder="Image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange('imageURL')}
            onBlur={handleBlur('imageURL')}
            value={values.imageURL}
          />
          {errors.imageURL && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.imageURL}</Text>
          )}
          <Button title="Share" onPress={handleSubmit} disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPost;

const styles = StyleSheet.create({});

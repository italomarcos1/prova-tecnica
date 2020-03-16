module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Anakin',
          last_name: 'Skywalker',
          phone_number: '61995807642',
          got_to_know: 'Internet',
          has_social: true,
          social_media: [true, true, false],
          created_at: '2020-03-11T20:39:03.709Z',
          updated_at: '2020-03-11T20:39:03.709Z',
        },
        {
          name: 'Obi-Wan',
          last_name: 'Kenobi',
          phone_number: '21993807250',
          got_to_know: 'Outros',
          has_social: false,
          created_at: '2020-03-12T20:39:03.709Z',
          updated_at: '2020-03-12T20:39:03.709Z',
        },
        {
          name: 'Luke',
          last_name: 'Skywalker',
          phone_number: '51912807252',
          got_to_know: 'TV',
          has_social: false,
          created_at: '2020-03-12T20:39:03.709Z',
          updated_at: '2020-03-12T20:39:03.709Z',
        },
        {
          name: 'Darth',
          last_name: 'Vader',
          phone_number: '11912867252',
          got_to_know: 'TV',
          has_social: true,
          social_media: [true, false, true],
          created_at: '2020-03-13T20:39:03.709Z',
          updated_at: '2020-03-13T20:39:03.709Z',
        },
        {
          name: 'Grandmaster',
          last_name: 'Yoda',
          phone_number: '12912567252',
          got_to_know: 'Internet',
          has_social: true,
          social_media: [false, true, true],
          created_at: '2020-03-14T20:39:03.709Z',
          updated_at: '2020-03-14T20:39:03.709Z',
        },
        {
          name: 'Italo',
          last_name: 'Marcos',
          phone_number: '42993807052',
          got_to_know: 'Internet',
          has_social: true,
          social_media: [true, true, true],
          created_at: '2020-03-14T20:39:03.709Z',
          updated_at: '2020-03-14T20:39:03.709Z',
        },
        {
          name: 'Jack',
          last_name: 'Nicholson',
          phone_number: '21993807252',
          got_to_know: 'TV',
          has_social: false,
          created_at: '2020-03-15T20:39:03.709Z',
          updated_at: '2020-03-15T20:39:03.709Z',
        },
        {
          name: 'Geralt',
          last_name: 'Rivia',
          phone_number: '51912807252',
          got_to_know: 'Outros',
          has_social: false,
          created_at: '2020-03-15T20:39:03.709Z',
          updated_at: '2020-03-15T20:39:03.709Z',
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  },
};

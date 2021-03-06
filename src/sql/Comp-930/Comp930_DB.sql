PGDMP     8    ;                 x            comp930    12.1    12.0     !           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            "           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            #           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            $           1262    17495    comp930    DATABASE     �   CREATE DATABASE comp930 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_Canada.1252' LC_CTYPE = 'English_Canada.1252';
    DROP DATABASE comp930;
                postgres    false            �            1259    17498    customer    TABLE       CREATE TABLE public.customer (
    customer_id integer NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    address character varying(512),
    phone character varying(50) NOT NULL,
    email character varying(355) NOT NULL
);
    DROP TABLE public.customer;
       public         heap    postgres    false            �            1259    17496    customer_customer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.customer_customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.customer_customer_id_seq;
       public          postgres    false    203            %           0    0    customer_customer_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.customer_customer_id_seq OWNED BY public.customer.customer_id;
          public          postgres    false    202            �            1259    17509    invoice    TABLE     �   CREATE TABLE public.invoice (
    invoice_id integer NOT NULL,
    customer_id integer NOT NULL,
    order_date date,
    total numeric(10,2) NOT NULL
);
    DROP TABLE public.invoice;
       public         heap    postgres    false            �            1259    17507    invoice_invoice_id_seq    SEQUENCE     �   CREATE SEQUENCE public.invoice_invoice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.invoice_invoice_id_seq;
       public          postgres    false    205            &           0    0    invoice_invoice_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.invoice_invoice_id_seq OWNED BY public.invoice.invoice_id;
          public          postgres    false    204            �            1259    17526    item    TABLE     �   CREATE TABLE public.item (
    invoice_id integer NOT NULL,
    product_id integer NOT NULL,
    product_name character varying(50) NOT NULL,
    unit_price numeric(10,2),
    total numeric(10,2)
);
    DROP TABLE public.item;
       public         heap    postgres    false            �            1259    17517    product    TABLE     �   CREATE TABLE public.product (
    product_id integer NOT NULL,
    product_name character varying(50) NOT NULL,
    product_description character varying(1000),
    unit_price numeric(10,2),
    total_stock integer
);
    DROP TABLE public.product;
       public         heap    postgres    false            �            1259    17515    product_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.product_product_id_seq;
       public          postgres    false    207            '           0    0    product_product_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.product_product_id_seq OWNED BY public.product.product_id;
          public          postgres    false    206            �
           2604    17501    customer customer_id    DEFAULT     |   ALTER TABLE ONLY public.customer ALTER COLUMN customer_id SET DEFAULT nextval('public.customer_customer_id_seq'::regclass);
 C   ALTER TABLE public.customer ALTER COLUMN customer_id DROP DEFAULT;
       public          postgres    false    203    202    203            �
           2604    17512    invoice invoice_id    DEFAULT     x   ALTER TABLE ONLY public.invoice ALTER COLUMN invoice_id SET DEFAULT nextval('public.invoice_invoice_id_seq'::regclass);
 A   ALTER TABLE public.invoice ALTER COLUMN invoice_id DROP DEFAULT;
       public          postgres    false    205    204    205            �
           2604    17520    product product_id    DEFAULT     x   ALTER TABLE ONLY public.product ALTER COLUMN product_id SET DEFAULT nextval('public.product_product_id_seq'::regclass);
 A   ALTER TABLE public.product ALTER COLUMN product_id DROP DEFAULT;
       public          postgres    false    207    206    207                      0    17498    customer 
   TABLE DATA           [   COPY public.customer (customer_id, firstname, lastname, address, phone, email) FROM stdin;
    public          postgres    false    203   �                 0    17509    invoice 
   TABLE DATA           M   COPY public.invoice (invoice_id, customer_id, order_date, total) FROM stdin;
    public          postgres    false    205   M                  0    17526    item 
   TABLE DATA           W   COPY public.item (invoice_id, product_id, product_name, unit_price, total) FROM stdin;
    public          postgres    false    208   C"                 0    17517    product 
   TABLE DATA           i   COPY public.product (product_id, product_name, product_description, unit_price, total_stock) FROM stdin;
    public          postgres    false    207   �$       (           0    0    customer_customer_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.customer_customer_id_seq', 12, true);
          public          postgres    false    202            )           0    0    invoice_invoice_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.invoice_invoice_id_seq', 50, true);
          public          postgres    false    204            *           0    0    product_product_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.product_product_id_seq', 20, true);
          public          postgres    false    206            �
           2606    17506    customer customer_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (customer_id);
 @   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_pkey;
       public            postgres    false    203            �
           2606    17514    invoice invoice_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT invoice_pkey PRIMARY KEY (invoice_id);
 >   ALTER TABLE ONLY public.invoice DROP CONSTRAINT invoice_pkey;
       public            postgres    false    205            �
           2606    17525    product product_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (product_id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            postgres    false    207               [  x�M�Ko�0�ϫ_!��R0���$EҤm� A�l��͆W"���w�En�$�f�I��Hp�^q�t����6bS����z�F[=�Gl�l����s	M����[tٻ8�J�����~�G��B�Va����enn���n��9ih��8\��q��d}�Y`"�G�vT+�Z�����8o���)��٤�<WVo���4R�V���j5{к~L��=�sT�)��V(�$���Ԡw������G��鉦<��Y��sP��Bv|�3=p>���!��V~`�;�OSz����ԟi
3�Z'�A٤^�´v	�;�}��o�{�n��.���Z��c�;��)�a�V[�W����ʴb!{iڸ!�i����X��1p����řm�����^�P,�
r���)��?x��qwCL��p�C���W�5��e��#���y'�\r��!���07W�ah^��<�ɧ��NJ�ع9�����J]<���8�00��B�� �a�{i@�OΤ�/i�!��6�Gx�?���{���`�}�䠝��q��/���[��L�L�֜�+�t�jEo��x�#���Wy����TU���         �  x�U�ٱ�8D��\��F �e��5i��S�����u�01yD1<rم�ߘ�,N~�|�Fz�7š���|D/��y��҃�)�]�֘�\��PhU��B}�>����c �r�4Ry�o4T�:|c=�!O�3`;x�ތ��1I��x�s��;^��$�9�t~�rm���]�9�kҏ�	a�0��m�.�O�>�����ōBG�s����#�Y�;���5
j Q�_W���b�&�$�k�{b9K�{����E����w�,�KSۃ�e�n�����Ɏ���{�=��M.�C���5�u�_�=!���c8fg���vja���x��nw*�yս3Qt*y��]��ɉ�b\A�Y��>x�c�J�q�z՟*ьB~�:��p�X��2�c�Ia��ik��U�c���x՟}5�$��פ��a"J�cϷ욷�����&_s� ���29N����i��$�����Ν�����^���         q  x�u��n�0��˧�,�]rI��P���^TGF��P� ��w��'3�a�8;��R��������H�k�o����ڽ.c7QI��h��)U��_N�:�O7#�2dLkq������8�ݥ� l�b�,�%R�8,O�v�n��"��B��<�qf�p)��p�.S��������d����l��t�=���$��������p^�Ӹ<w�N�p2���O����n�1҄c� P�� 3�'�c�}����T���"�crH*^��úL/�L1��T��b* 	�u�e�����9h�MŸd��F�iy�I3G�E������J3���H�I����i��20d�7VA$���@������{�~�@(�0�i-��Q�am��D�	b��łG4�9��/N�U9��ĚvM9`�s��[�RZfU�vj���Kq���g�����.���D��x�4\�i����Js�E��6�"�t�uq�'��-��U��^aKl����ra����\��@�*җ���-<���>��i[�x�I�\���L������t�m��"�js]�
g�m��
G��Qx�Fjh����Se�0ou-�D	�Q��hw������ι�#�`�         j  x��S�n�0>���Y0��j����4�F��٩��{���;��!��$d<���a�ϫ{��-��$�W�$zJwr�)�Eb���#����5��=��x���M�罇-N������Q���h̼0�����f~�nM���OcH�A7(Ӂ�h���ŕ}O�ݢ�>�n$���PW��`�;���|�(Nw��q�nv2'�z�i��A��֣[��!Δ�gܒ۔�y*pe\b ƽ:����%%8C_������JyO�i^����=IE���vW��H���mah*��n$O�7�p9�
�QUCۋ�\sJ��!{_8��4����a:�u��~�&y`�9�.`��0:�O�����=�O��+C�����/8��aԪ�`�^h]�"�죇������6!kb��mp�$݂	t����5<q�����i��s�6w}c_P�4rd�6�Zh� t�<q��`��+o)*е�,Û[���x����L[�jʄ�G��W���f&������/��)"���၏��>P���k:�[nd-�P��'�N��ҕ�����Z�-��)���̊KK(�-��b@�ժ�`++8�7."�F�G����+vqZ��?��74�@     